export type portfolioDataType = {
  id: number
  title: string
  img: any
  ApplicationFramework: string
  FrameworkStyles: string
  description: string
  allLibraryAndFramework: string[]
  linkLiveApp: string
  linkGithub: string
}[]

export type Props = {
  children?: React.ReactNode
};