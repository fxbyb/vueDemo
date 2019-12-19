import HeaderLayout from '@/components/app/layout/shared/header';
import leftMenuLayout from '@/components/app/layout/shared/leftMenu';

const sharedComponents = {
  install: function (Vue) {
    Vue.component('HeaderLayout', HeaderLayout);
    Vue.component('leftMenuLayout', leftMenuLayout);
  }
}
export default sharedComponents;
