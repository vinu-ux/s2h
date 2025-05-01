export const cssProperty ={
  text: 'border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]',
  a: 'menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]',
  commonText: 'text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary',
  accordian: 'gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200',
  menuDiv: 'flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]',
  menuTit: 'text-sm font-medium fn18 text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary'
}


export const designsTag = [
  {
    header: {
      options: {hasSub: 'Y', collapse: false},
      h1: {tag: `<h1></h1>`, text: 'Enter Text',color: 'black',class: ''},
      h2: {tag: `<h2></h2>`, text: 'Enter Text',color: 'black', class: ''},
      h3: {tag: `<h3></h3>`, text: 'Enter Text',color: 'black', class: ''},
      h4: {tag: `<h4></h4>`, text: 'Enter Text',color: 'black',class: ''},
      h5: {tag: `<h5></h5>`, text: 'Enter Text',color: 'black',class: ''},
      h6: {tag: `<h16></h16>`, text: 'Enter Text',color: 'black',class: ''}
      }
  }
,
    {button: {tag: `<button></button>`, text: 'Text',color: 'black', background:'blue',class: ''},options: {hasSub: 'N', collapse: false},},
    {link: {tag: `<a></a>`, text: 'Text',color: 'black', background:'blue',class: ''},options: {hasSub: 'N', collapse: false},},
    {image: {tag: `<img />`, text: 'Text',color: 'black', background:'blue',class: ''},options: {hasSub: 'N', collapse: false},},
    {section: {tag: `<section></section`, width: '100',height: '100',class: ''},options: {hasSub: 'N', collapse: false},},
    {div: {tag: `<section></section`, width: '100',height: '100',class: ''},options: {hasSub: 'N', collapse: false},},
    {span: {tag: `<span></span`}},

  ]
