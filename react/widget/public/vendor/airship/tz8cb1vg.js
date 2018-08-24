/*! Built with http://stenciljs.com */
const{h:e}=window.airship;import{a as t,b as s}from"./chunk-c5cc0553.js";const r="#747474",a="Other",i="#47DB99";class o{constructor(){this.categories=[],this.defaultBarColor=i,this.showClearButton=!1,this.showHeader=!0,this.useTotalPercentage=!1,this.visibleCategories=1/0,this.selectedCategories=[]}getSelectedCategories(){return this.selectedCategories}clearSelection(){this.selectedCategories.length&&(this.selectedCategories=[],this._onCategoriesChanged())}render(){return[this._renderHeader(),this._renderCategoryList(),this._renderFooter()]}_renderHeader(){if(this.showHeader)return[e("h2",{class:"as-category-widget__heading"},this.heading),e("p",{class:"as-category-widget__description as-body"},this.description)]}_renderCategoryList(){return e("ul",{class:"as-category-widget__list"},this._renderCategories())}_renderCategories(){const e=this.categories.length>this.visibleCategories,{categories:t,otherCategory:s}=this._parseCategories();let r;const a=t.slice(0,this.visibleCategories),i=this.useTotalPercentage?this._getCategoriesTotalValue(this.categories):this._getVisibleCategoriesMaximumValue();return(s||e)&&(r=this._renderOtherCategory(s,{maximumValue:i})),[a.map(e=>this._renderCategory(e,{maximumValue:i})),r]}_renderCategory(s,r){const{isOther:a,maximumValue:i}=r,o=this._isSelected(s.name),g=this.selectedCategories.length>0,l={backgroundColor:this._getBarColor(s.color||this.defaultBarColor,{isSelected:o,isOther:a}),width:`${s.value/i*100}%`};return e("li",{class:{"as-category-widget__category":!0,"as-category-widget__category--not-selected":g&&(!o||a),"as-category-widget__category--other":a,"as-category-widget__category--selected":o},onClick:()=>this._toggleCategory(s)},e("p",{class:"as-category-widget__info as-body"},e("div",{class:"as-category-widget__title"},s.name),t(s.value)),e("div",{class:"as-category-widget__bar"},e("div",{class:"as-category-widget__bar-value",style:l})))}_renderOtherCategory(e,t){const s=e||{name:"Other",value:this._getCategoriesTotalValue(this.categories.slice(this.visibleCategories,this.categories.length))};return this._renderCategory(s,{maximumValue:t.maximumValue,isOther:!0})}_renderFooter(){const t=this.selectedCategories.length;return e("footer",{class:"as-category-widget__footer"},e("div",{class:"as-category-widget__count as-body"},t||"All"," selected"),this.showClearButton&&e("button",{class:"as-btn as-btn--primary as-btn--s as-category-widget__clear",disabled:!t,onClick:()=>this.clearSelection()},"Clear selection"))}_isSelected(e){return this.selectedCategories.includes(e)}_toggleCategory(e){this.selectedCategories=this._isSelected(e.name)?this.selectedCategories.filter(t=>t!==e.name):[...this.selectedCategories,e.name],this._onCategoriesChanged()}_onCategoriesChanged(){this.categoriesSelected.emit(this.selectedCategories)}_getVisibleCategoriesMaximumValue(){return this._getVisibleCategories().reduce((e,t)=>t.value>e?t.value:e,0)}_getCategoriesTotalValue(e){return e.reduce((e,t)=>t.value+e,0)}_getBarColor(e,t={}){return t.isOther?r:t.isSelected?s(-.16,e):e}_parseCategories(){const e=this.categories.find(e=>e.name===a);return e?{categories:this.categories.filter(t=>t.name!==e.name),otherCategory:e}:{categories:this.categories}}_getVisibleCategories(){return this.categories.slice(0,this.visibleCategories)}static get is(){return"as-category-widget"}static get properties(){return{categories:{type:"Any",attr:"categories"},clearSelection:{method:!0},defaultBarColor:{type:String,attr:"default-bar-color"},description:{type:String,attr:"description"},getSelectedCategories:{method:!0},heading:{type:String,attr:"heading"},selectedCategories:{state:!0},showClearButton:{type:Boolean,attr:"show-clear-button"},showHeader:{type:Boolean,attr:"show-header"},useTotalPercentage:{type:Boolean,attr:"use-total-percentage"},visibleCategories:{type:Number,attr:"visible-categories"}}}static get events(){return[{name:"categoriesSelected",method:"categoriesSelected",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-category-widget{--category-widget--description--color:#747474;--category-widget--bar--height:4px;--category-widget--background-color:#FFF;--category-bar--background-color:#F5F5F5;display:block;background:var(--category-widget--background-color,#fff)}as-category-widget .as-category-widget__heading{margin:0;font:16px/24px var(--font-family-base,Roboto,sans-serif)}as-category-widget .as-category-widget__count,as-category-widget .as-category-widget__description{color:var(--description--color,#747474);color:#747474}as-category-widget .as-category-widget__list{padding:0 0 16px;list-style:none}as-category-widget .as-category-widget__description+.as-category-widget__list{margin-top:16px}as-category-widget .as-category-widget__info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__title{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;padding-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}as-category-widget .as-category-widget__bar{position:relative;width:100%;height:4px;border-radius:2px;background-color:var(--category-bar--background-color,#f5f5f5);background-color:#f5f5f5}as-category-widget .as-category-widget__bar-value{position:absolute;left:0;max-width:100%;height:4px;-webkit-transition:background .2s ease,opacity .5s ease;transition:background .2s ease,opacity .5s ease;border-radius:2px}as-category-widget .as-category-widget__category{margin-bottom:8px;cursor:pointer}as-category-widget .as-category-widget__category--other{pointer-events:none}as-category-widget .as-category-widget__category--not-selected{opacity:.5}as-category-widget .as-category-widget__category:not(.as-category-widget__category--selected):hover .as-category-widget__bar-value{opacity:.6}as-category-widget .as-category-widget__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}"}}export{o as AsCategoryWidget};