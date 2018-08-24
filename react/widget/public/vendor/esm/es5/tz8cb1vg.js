/*! Built with http://stenciljs.com */
import{h}from"./airship.core.js";import{a as readableNumber,b as shadeOrBlend}from"./chunk-c5cc0553.js";var OTHER_CATEGORY_COLOR="#747474",OTHER_CATEGORY_NAME="Other",DEFAULT_BAR_COLOR="#47DB99",CategoryWidget=function(){function e(){this.categories=[],this.defaultBarColor=DEFAULT_BAR_COLOR,this.showClearButton=!1,this.showHeader=!0,this.useTotalPercentage=!1,this.visibleCategories=1/0,this.selectedCategories=[]}return e.prototype.getSelectedCategories=function(){return this.selectedCategories},e.prototype.clearSelection=function(){this.selectedCategories.length&&(this.selectedCategories=[],this._onCategoriesChanged())},e.prototype.render=function(){return[this._renderHeader(),this._renderCategoryList(),this._renderFooter()]},e.prototype._renderHeader=function(){if(this.showHeader)return[h("h2",{class:"as-category-widget__heading"},this.heading),h("p",{class:"as-category-widget__description as-body"},this.description)]},e.prototype._renderCategoryList=function(){return h("ul",{class:"as-category-widget__list"},this._renderCategories())},e.prototype._renderCategories=function(){var e,t=this,r=this.categories.length>this.visibleCategories,i=this._parseCategories(),o=i.categories,a=i.otherCategory,s=o.slice(0,this.visibleCategories),n=this.useTotalPercentage?this._getCategoriesTotalValue(this.categories):this._getVisibleCategoriesMaximumValue();return(a||r)&&(e=this._renderOtherCategory(a,{maximumValue:n})),[s.map(function(e){return t._renderCategory(e,{maximumValue:n})}),e]},e.prototype._renderCategory=function(e,t){var r=this,i=t.isOther,o=t.maximumValue,a=this._isSelected(e.name),s=this.selectedCategories.length>0,n={backgroundColor:this._getBarColor(e.color||this.defaultBarColor,{isSelected:a,isOther:i}),width:e.value/o*100+"%"};return h("li",{class:{"as-category-widget__category":!0,"as-category-widget__category--not-selected":s&&(!a||i),"as-category-widget__category--other":i,"as-category-widget__category--selected":a},onClick:function(){return r._toggleCategory(e)}},h("p",{class:"as-category-widget__info as-body"},h("div",{class:"as-category-widget__title"},e.name),readableNumber(e.value)),h("div",{class:"as-category-widget__bar"},h("div",{class:"as-category-widget__bar-value",style:n})))},e.prototype._renderOtherCategory=function(e,t){var r=e||{name:"Other",value:this._getCategoriesTotalValue(this.categories.slice(this.visibleCategories,this.categories.length))};return this._renderCategory(r,{maximumValue:t.maximumValue,isOther:!0})},e.prototype._renderFooter=function(){var e=this,t=this.selectedCategories.length;return h("footer",{class:"as-category-widget__footer"},h("div",{class:"as-category-widget__count as-body"},t||"All"," selected"),this.showClearButton&&h("button",{class:"as-btn as-btn--primary as-btn--s as-category-widget__clear",disabled:!t,onClick:function(){return e.clearSelection()}},"Clear selection"))},e.prototype._isSelected=function(e){return this.selectedCategories.includes(e)},e.prototype._toggleCategory=function(e){this.selectedCategories=this._isSelected(e.name)?this.selectedCategories.filter(function(t){return t!==e.name}):this.selectedCategories.concat([e.name]),this._onCategoriesChanged()},e.prototype._onCategoriesChanged=function(){this.categoriesSelected.emit(this.selectedCategories)},e.prototype._getVisibleCategoriesMaximumValue=function(){return this._getVisibleCategories().reduce(function(e,t){return t.value>e?t.value:e},0)},e.prototype._getCategoriesTotalValue=function(e){return e.reduce(function(e,t){return t.value+e},0)},e.prototype._getBarColor=function(e,t){return void 0===t&&(t={}),t.isOther?OTHER_CATEGORY_COLOR:t.isSelected?shadeOrBlend(-.16,e):e},e.prototype._parseCategories=function(){var e=this.categories.find(function(e){return e.name===OTHER_CATEGORY_NAME});return e?{categories:this.categories.filter(function(t){return t.name!==e.name}),otherCategory:e}:{categories:this.categories}},e.prototype._getVisibleCategories=function(){return this.categories.slice(0,this.visibleCategories)},Object.defineProperty(e,"is",{get:function(){return"as-category-widget"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{categories:{type:"Any",attr:"categories"},clearSelection:{method:!0},defaultBarColor:{type:String,attr:"default-bar-color"},description:{type:String,attr:"description"},getSelectedCategories:{method:!0},heading:{type:String,attr:"heading"},selectedCategories:{state:!0},showClearButton:{type:Boolean,attr:"show-clear-button"},showHeader:{type:Boolean,attr:"show-header"},useTotalPercentage:{type:Boolean,attr:"use-total-percentage"},visibleCategories:{type:Number,attr:"visible-categories"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"categoriesSelected",method:"categoriesSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-category-widget{--category-widget--description--color:#747474;--category-widget--bar--height:4px;--category-widget--background-color:#FFF;--category-bar--background-color:#F5F5F5;display:block;background:var(--category-widget--background-color,#fff)}as-category-widget .as-category-widget__heading{margin:0;font:16px/24px var(--font-family-base,Roboto,sans-serif)}as-category-widget .as-category-widget__count,as-category-widget .as-category-widget__description{color:var(--description--color,#747474);color:#747474}as-category-widget .as-category-widget__list{padding:0 0 16px;list-style:none}as-category-widget .as-category-widget__description+.as-category-widget__list{margin-top:16px}as-category-widget .as-category-widget__info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__title{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;padding-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}as-category-widget .as-category-widget__bar{position:relative;width:100%;height:4px;border-radius:2px;background-color:var(--category-bar--background-color,#f5f5f5);background-color:#f5f5f5}as-category-widget .as-category-widget__bar-value{position:absolute;left:0;max-width:100%;height:4px;-webkit-transition:background .2s ease,opacity .5s ease;transition:background .2s ease,opacity .5s ease;border-radius:2px}as-category-widget .as-category-widget__category{margin-bottom:8px;cursor:pointer}as-category-widget .as-category-widget__category--other{pointer-events:none}as-category-widget .as-category-widget__category--not-selected{opacity:.5}as-category-widget .as-category-widget__category:not(.as-category-widget__category--selected):hover .as-category-widget__bar-value{opacity:.6}as-category-widget .as-category-widget__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}"},enumerable:!0,configurable:!0}),e}();export{CategoryWidget as AsCategoryWidget};