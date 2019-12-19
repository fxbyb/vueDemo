const EmotionComponent = () => import('@/components/app/recreation/netbook/emotion');
const FantasyComponent = () => import('@/components/app/recreation/netbook/fantasy');
const GongfuComponent = () => import('@/components/app/recreation/netbook/gongfu');

var netbookRouter = [{
    path: 'netbook/fantasy',
    component: FantasyComponent
  },
  {
    path: 'netbook/gongfu',
    component: GongfuComponent
  },
  {
    path: 'netbook/emotion',
    component: EmotionComponent
  }
]
export default netbookRouter;
