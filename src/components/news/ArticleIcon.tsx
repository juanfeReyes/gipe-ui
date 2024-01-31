import {RiArticleFill} from '@react-icons/all-files/ri/RiArticleFill'
import React from 'react'

export const ArticleType = ({articleType}: {articleType: string}) => {

  return (
    <div className="flex items-center gap-1">
                <ArticleIcon articleType={articleType} />
                {articleType}
              </div>
  )
}

const ArticleIcon = ({articleType}: {articleType: string}) => {

  switch (articleType) {
    case 'Article':
      return <RiArticleFill />
  }
}

