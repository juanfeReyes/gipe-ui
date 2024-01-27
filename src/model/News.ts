import { ImageDataLike } from "gatsby-plugin-image"

export interface Article {
  title: string
  imagePath: ImageDataLike
  publishDate: string
  summary: string
  category: string
  timeToRead: string
  body: string
}
