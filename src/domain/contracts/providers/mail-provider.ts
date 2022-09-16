export interface IContextData {
  [context: string]: string
}

export interface IMailProvider {
  sendMail: (to: string, context: IContextData, subject: string, template: string, sender?: string) => Promise<void>
}
