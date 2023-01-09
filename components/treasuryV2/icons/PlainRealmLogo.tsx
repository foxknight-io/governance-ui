import React from 'react'

type Props = React.SVGAttributes<SVGElement>

export default function PlainRealmLogo(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.2504 21.103C16.1414 21.1449 16.0536 21.0115 16.1309 20.9239C18.2285 18.5447 19.501 15.4209 19.501 11.9998C19.501 8.57872 18.2285 5.45485 16.1309 3.07572C16.0536 2.98807 16.1414 2.85468 16.2504 2.89663C19.9064 4.30297 22.501 7.84839 22.501 11.9998C22.501 16.1512 19.9064 19.6966 16.2504 21.103Z" />
      <path d="M17.0542 6.26889C17.1029 6.37964 16.9483 6.49095 16.8505 6.41971C16.3949 6.08778 15.5871 5.625 14.625 5.625C12.75 5.625 10.125 7.875 10.125 12C10.125 16.125 12 18.375 14.25 18.375C15.4619 18.375 16.3605 17.905 16.8445 17.5726C16.9442 17.5041 17.1029 17.6204 17.0542 17.7311C15.8419 20.4874 13.3618 22.5 10.5 22.5C5.94365 22.5 1.5 17.799 1.5 12C1.5 6.20101 5.94365 1.5 10.5 1.5C13.3618 1.5 15.8419 3.51263 17.0542 6.26889Z" />
    </svg>
  )
}