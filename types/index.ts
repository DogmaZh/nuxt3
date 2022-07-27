import { FunctionalComponent, SVGAttributes } from 'vue'

export interface ILayoutNavigationItem {
  icon: FunctionalComponent<SVGAttributes>;
  name: string;
  route: string;
}