interface Props {
  params: {
    id: string
  }
}

export default function Posts({ params }: Props) {
  return <h1>Post ID: {params.id}</h1>
}
