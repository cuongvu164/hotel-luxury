import BookPage from './pages/BookPage/BookPage'
import HomePage from './pages/HomePage/HomePage'
import RoomPage from './pages/RoomPage/RoomPage'
import BlogPage from './pages/BlogPage/BlogPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SignInPage from './pages/SignInPage/SignInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

export const routers = [
  {path: '/booknow', exact: true, Component: BookPage, name: 'BookNow', props: { shouldShowHeader: false } },
  {path: '/', exact: true, Component: HomePage, name: 'Home', props: { shouldShowHeader: true }},
  {path: '/room', exact: true, Component: RoomPage, name: 'Room', props: { shouldShowHeader: false }},
  {path: '/blog', exact: true, Component: BlogPage, name: 'Blog', props: { shouldShowHeader: false }},
  {path: '/about', exact: true, Component: AboutPage, name: 'About', props: { shouldShowHeader: false }},
  {path: '/contact', exact: true, Component: ContactPage, name: 'Contact', props: { shouldShowHeader: false }},
  {path: '/signin', exact: true, Component: SignInPage, name: 'Signin', props: { shouldShowHeader: false }},
  {path: '/signup', exact: true, Component: SignUpPage, name: 'Signup', props: { shouldShowHeader: false }},
  {path: '/account/profile', exact: true, Component: ProfilePage, name: 'ProFile', props: { shouldShowHeader: false }}

]