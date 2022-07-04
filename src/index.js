import Post from './Post'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'
import WebpackLogo from './assets/webpack-logo.png'
const post = new Post('Webpack Post Title',WebpackLogo)
console.log('Post to string ', post.toString())