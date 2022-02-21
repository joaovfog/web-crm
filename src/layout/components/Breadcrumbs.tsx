import { Link } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs } from '../../components'

interface Link {
  url: string
  name: string
}
interface BreadcrumbsProps {
  linkOne?: string
  linkOneTitle?: string
  links?: Link[]
  span: string
}

export const Breadcrumbs = ({
  linkOne = 'home',
  linkOneTitle = 'Início',
  links,
  span
}: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      style={{ marginLeft: 56, paddingTop: 10 }}
    >
      <Link to={`/${linkOne}`} color="#262626" style={{ color: '#595959' }}>
        {linkOneTitle}
      </Link>
      {links &&
        links.map((link, index) => (
          <Link
            key={index}
            to={`/${link.url}`}
            color="#262626"
            style={{ color: '#595959' }}
          >
            {link.name}
          </Link>
        ))}
      <span style={{ color: '#595959' }}>{span}</span>
    </MuiBreadcrumbs>
  )
}
