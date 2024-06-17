import {randomCompanyName, randomJobTitle, randomName, randomParagraphs, randomUUID} from './chance.ts'
import {randomAvatar} from './image.ts'

export type CustomerComment = {
  uuid: string
  name: string
  jobTitle: string
  company: string
  avatar: string
  comment: string
}

export const makeCustomerComment = (
  uuid: string, name: string, jobTitle: string, company: string, avatar: string, comment: string
): CustomerComment => ({uuid, name, jobTitle, company, comment, avatar})

export const makeRandomCustomerComment = () =>
  makeCustomerComment(
    randomUUID(), randomName(), randomJobTitle(), randomCompanyName(), randomAvatar(), randomParagraphs()
  )