import videoRouter from '@/router/recreation/video/route';
import netbookRouter from '@/router/recreation/netbook/route';
import musicRouter from '@/router/recreation/music/route';

var recreationRouter = videoRouter.concat(musicRouter).concat(netbookRouter)
export default recreationRouter;
