interface Props {
  params: {
    id: string
  }
}

export default async function Repos({ params }: Props) {
  const response = await fetch(`https://api.github.com/users/${params.id}/starred`)
  const repos = await response.json()

  return (
    <>
      <h1>Usuário: {params.id}</h1>
      <ul>
        {repos.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.html_url} target="_blank">
                <pre>{item.name}</pre>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}