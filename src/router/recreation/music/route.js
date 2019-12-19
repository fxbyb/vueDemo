const AncientComponent = () => import('@/components/app/recreation/music/ancient');
const FashionComponent = () => import('@/components/app/recreation/music/fashion');
const FashionDetailComponent = () => import('@/components/app/recreation/music/fashiondetail');
const FashionListComponent = () => import('@/components/app/recreation/music/fashionlist');
const RockComponent = () => import('@/components/app/recreation/music/rock');

var musicRouter = [{
    path: 'music/fashion',
    component: FashionComponent,
    children: [{
        path: '',
        component: FashionListComponent
      },
      {
        path: 'detail',
        component: FashionDetailComponent
      }
    ]
  },
  {
    path: 'music/ancient',
    component: AncientComponent
  },
  {
    path: 'music/rock',
    name: 'gogo',
    component: RockComponent,
    props: {
      age: false,
      name
    }
  },
]
export default musicRouter;
