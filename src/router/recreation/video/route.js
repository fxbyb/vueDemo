const MovieComponent = () => import('@/components/app/recreation/video/movie');
const TvplayComponent = () => import('@/components/app/recreation/video/tvplay');
const VarietyComponent = () => import('@/components/app/recreation/video/variety');

var videoRouter = [{
    path: 'video/tvplay',
    component: TvplayComponent
  },
  {
    path: 'video/movie',
    component: MovieComponent
  },
  {
    path: 'video/variety',
    component: VarietyComponent
  }
]
export default videoRouter
