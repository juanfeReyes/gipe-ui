import {RiArticleFill} from '@react-icons/all-files/ri/RiArticleFill'
import React from 'react'


export const ArticleIcon = ({articleType}: {articleType: string}) => {

  switch (articleType) {
    case 'Article':
      return <RiArticleFill />
  }
}