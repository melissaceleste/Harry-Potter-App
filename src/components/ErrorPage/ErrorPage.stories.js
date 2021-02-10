import ErrorPage from './ErrorPage'

export default {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
}

export const base = () => ErrorPage().errorImage // .el nur wenn ich ein Objekt returne
