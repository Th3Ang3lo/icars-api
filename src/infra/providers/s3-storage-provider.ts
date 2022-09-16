import crypto from 'crypto'
import path from 'path'

import aws, { S3 } from 'aws-sdk'

import { IS3StorageProvider } from '@/domain/contracts/providers'

export class S3StorageProvider implements IS3StorageProvider {
  private readonly s3: S3

  constructor () {
    this.s3 = new aws.S3({
      region: process.env.AWS_S3_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }

  public async saveFile (file: Express.Multer.File, insidePath = '', acl = 'public-read'): Promise<string> {
    const fileHash = `${crypto.randomBytes(32).toString('hex')}${path.extname(file.originalname)}`
    let fileToSave = `${insidePath}${insidePath && '/'}${fileHash}`

    try {
      await this.s3.putObject({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: fileToSave,
        ACL: acl,
        Body: file.buffer,
        ContentType: file.mimetype
      }).promise()
    } catch (error) {
      fileToSave = 'users/default.png'
    }

    return `${process.env.AWS_STORAGE_URL}/${fileToSave}`
  }
}
