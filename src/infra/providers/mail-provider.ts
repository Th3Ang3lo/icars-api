import aws from 'aws-sdk'
import nodemailer, { Transporter } from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

import { IMailProvider, IContextData } from '@/domain/contracts/providers/mail-provider'

import { InternalServerErrorException } from '../../shared/exceptions'

export class MailProvider implements IMailProvider {
  private readonly transporter: Transporter

  constructor () {
    this.transporter = nodemailer.createTransport({
      SES: new aws.SES({
        region: process.env.AWS_SES_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        apiVersion: '2010-12-01'
      })
    })

    this.transporter.use('compile', hbs({
      viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/shared/resources/mail/')
      },
      viewPath: path.resolve('./src/shared/resources/mail/'),
      extName: '.html'
    })
    )
  }

  public async sendMail (to: string, context: IContextData, subject: string, template: string, sender = 'Sender'): Promise<void> {
    try {
      await this.transporter.sendMail({
        to,
        from: process.env.EMAIL_FROM,
        sender,
        subject,
        template,
        context
      } as any)
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível enviar o e-mail de recuperação. Entre em contato com o suporte.')
    }
  }
}
