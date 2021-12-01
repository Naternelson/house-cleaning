import env from 'react-dotenv'

export const emailConfig = {
    token: env.GMAIL_USER_TOKEN, 
    template: env.GMAIL_TEMPLATE_ID, 
    serviceId: env.GMAIL_SERVICE_ID
}
