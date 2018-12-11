/*! Built with http://stenciljs.com */
const{h:t}=window.appblog;import{a}from"./chunk-87f8ab3e.js";import{a as s,v as i,c as r}from"./chunk-2c4f1c37.js";class e{constructor(){this.db=firebase.database(),this.ref=this.db.ref("blog/posts")}async componentWillLoad(){await a(this.ref).subscribe(t=>{this.posts=t.snapshot.val()})}render(){return this.posts?t("div",{class:"card-group"},this.posts.map((a,s)=>t("div",{class:"card"},t("img",{class:"card-img-top",src:a.imgUrl,alt:"Card image cap"}),t("div",{class:"card-body"},t("h5",{class:"card-title"},a.author),t("p",{class:"card-text"},a.content),t("stencil-route-link",{url:`/blog/${s}`},t("a",{class:"btn btn-primary"},"Procitaj vise"))),t("div",{class:"card-footer"},t("small",{class:"text-muted"},"Date: ",a.date))))):"Loading"}static get is(){return"blog-list"}static get encapsulation(){return"shadow"}static get properties(){return{posts:{state:!0}}}static get style(){return"\@import url(\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\");.card.sc-blog-list{width:18rem;max-width:33%}.card.sc-blog-list   a.sc-blog-list{color:#fff}"}}class c{constructor(){this.unsubscribe=(()=>{}),this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=s(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var a,s;if(!i(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((s=this.root,"/"==(a=this.url).charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+a:s+a))}render(){let a={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(a.class[this.anchorClass]=!0),"a"===this.custom&&(a=Object.assign({},a,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),t(this.custom,Object.assign({},a),t("slot",null))}static get is(){return"stencil-route-link"}static get properties(){return{activeClass:{type:String,attr:"active-class"},anchorClass:{type:String,attr:"anchor-class"},anchorId:{type:String,attr:"anchor-id"},anchorRole:{type:String,attr:"anchor-role"},anchorTabIndex:{type:String,attr:"anchor-tab-index"},anchorTitle:{type:String,attr:"anchor-title"},ariaHaspopup:{type:String,attr:"aria-haspopup"},ariaLabel:{type:String,attr:"aria-label"},ariaPosinset:{type:String,attr:"aria-posinset"},ariaSetsize:{type:Number,attr:"aria-setsize"},custom:{type:String,attr:"custom"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},history:{type:"Any",attr:"history"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},root:{type:String,attr:"root"},strict:{type:Boolean,attr:"strict"},url:{type:String,attr:"url"},urlMatch:{type:String,attr:"url-match"}}}}r.injectProps(c,["history","location","root"]);export{e as BlogList,c as StencilRouteLink};