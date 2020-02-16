(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./src/schema-types/globalTypes.ts":function(E,n,_){"use strict";var e,r,t,T,O,a,I,R,S,i,N,c,u,C,P,A,o,D,s,L,U,f,p,M,h,d,g;_.d(n,"a",(function(){return a})),_.d(n,"b",(function(){return I})),_.d(n,"c",(function(){return R})),_.d(n,"d",(function(){return S})),_.d(n,"e",(function(){return N})),_.d(n,"f",(function(){return c})),_.d(n,"g",(function(){return P})),_.d(n,"h",(function(){return D})),_.d(n,"i",(function(){return s})),_.d(n,"j",(function(){return L})),_.d(n,"k",(function(){return h})),_.d(n,"l",(function(){return g})),function(E){E.AUDIO="AUDIO",E.LINK="LINK",E.USER="USER"}(e||(e={})),function(E){E.APPROVED="APPROVED",E.PENDING="PENDING",E.REMOVED="REMOVED"}(r||(r={})),function(E){E.ACCENT_COLOR="ACCENT_COLOR",E.ACCENT_COLOR_AND_FILL_BACKGROUND="ACCENT_COLOR_AND_FILL_BACKGROUND"}(t||(t={})),function(E){E.CURATION_STATUS_DISABLED="CURATION_STATUS_DISABLED",E.CURATION_STATUS_DISTRIBUTED="CURATION_STATUS_DISTRIBUTED",E.CURATION_STATUS_DISTRIBUTED_AND_DISABLED="CURATION_STATUS_DISTRIBUTED_AND_DISABLED",E.CURATION_STATUS_NOT_DISTRIBUTED="CURATION_STATUS_NOT_DISTRIBUTED",E.CURATION_STATUS_NOT_REVIEWED="CURATION_STATUS_NOT_REVIEWED",E.CURATION_STATUS_PENDING="CURATION_STATUS_PENDING"}(T||(T={})),function(E){E.ACTIVITY="ACTIVITY",E.ANDROID="ANDROID",E.COLLECTION="COLLECTION",E.EMAIL="EMAIL",E.HOMEPAGE="HOMEPAGE",E.IOS="IOS",E.OTHERS="OTHERS",E.POST="POST",E.PROFILE="PROFILE",E.RELATED="RELATED",E.SOCIAL="SOCIAL"}(O||(O={})),function(E){E.CONSTRAINED_HEIGHT_PREVIEW="CONSTRAINED_HEIGHT_PREVIEW",E.CROPPED_HEIGHT_PREVIEW="CROPPED_HEIGHT_PREVIEW",E.FULL_WIDTH="FULL_WIDTH",E.FULL_WIDTH_CROPPED_COVER="FULL_WIDTH_CROPPED_COVER",E.INSET_CENTER="INSET_CENTER",E.INSET_CENTER_SMALL="INSET_CENTER_SMALL",E.INSET_LEFT="INSET_LEFT",E.INSET_RIGHT="INSET_RIGHT",E.OUTSET_CENTER="OUTSET_CENTER",E.OUTSET_LEFT="OUTSET_LEFT",E.OUTSET_ROW="OUTSET_ROW",E.OUTSET_ROW_CONTINUE="OUTSET_ROW_CONTINUE"}(a||(a={})),function(E){E.LOCKED_POST_SOURCE_COMMISSIONED="LOCKED_POST_SOURCE_COMMISSIONED",E.LOCKED_POST_SOURCE_FEATURE_LOCK="LOCKED_POST_SOURCE_FEATURE_LOCK",E.LOCKED_POST_SOURCE_NONE="LOCKED_POST_SOURCE_NONE",E.LOCKED_POST_SOURCE_PARTNERSHIPS="LOCKED_POST_SOURCE_PARTNERSHIPS",E.LOCKED_POST_SOURCE_PUBLICATION_MEMBERSHIP="LOCKED_POST_SOURCE_PUBLICATION_MEMBERSHIP",E.LOCKED_POST_SOURCE_SYNDICATED="LOCKED_POST_SOURCE_SYNDICATED",E.LOCKED_POST_SOURCE_UGC="LOCKED_POST_SOURCE_UGC",E.LOCKED_POST_SOURCE_UGC_UNENROLLED="LOCKED_POST_SOURCE_UGC_UNENROLLED"}(I||(I={})),function(E){E.fullFeatureCard="fullFeatureCard",E.halfFeatureCard="halfFeatureCard",E.headerCard="headerCard",E.imageCard="imageCard",E.quoteCard="quoteCard",E.shortStoryCard="shortStoryCard",E.standardCard="standardCard"}(R||(R={})),function(E){E.A="A",E.CODE="CODE",E.COMMENT="COMMENT",E.EM="EM",E.HIGHLIGHT="HIGHLIGHT",E.QUERY="QUERY",E.QUOTE="QUOTE",E.SENTENCE_DEPRECATED="SENTENCE_DEPRECATED",E.STRONG="STRONG",E.UNUSED_DETAIL="UNUSED_DETAIL",E.WARNING="WARNING"}(S||(S={})),function(E){E.ABOUT_PAGE_NAV_ITEM="ABOUT_PAGE_NAV_ITEM",E.ARCHIVE_NAV_ITEM="ARCHIVE_NAV_ITEM",E.EXTERNAL_LINK_NAV_ITEM="EXTERNAL_LINK_NAV_ITEM",E.POST_NAV_ITEM="POST_NAV_ITEM",E.TAG_NAV_ITEM="TAG_NAV_ITEM",E.TOPIC_PAGE="TOPIC_PAGE"}(i||(i={})),function(E){E.BQ="BQ",E.COVER_TITLE="COVER_TITLE",E.H1="H1",E.H2="H2",E.H3="H3",E.H4="H4",E.HR="HR",E.IFRAME="IFRAME",E.IMG="IMG",E.MIXTAPE_EMBED="MIXTAPE_EMBED",E.OLI="OLI",E.P="P",E.PQ="PQ",E.PRE="PRE",E.SECTION_CAPTION="SECTION_CAPTION",E.ULI="ULI"}(N||(N={})),function(E){E.ENROLLED="ENROLLED",E.NOT_ENROLLED="NOT_ENROLLED",E.PERMISSION_DENIED="PERMISSION_DENIED"}(c||(c={})),function(E){E.CAD="CAD",E.CURRENCY_NOT_APPLICABLE="CURRENCY_NOT_APPLICABLE",E.UNKNOWN_CURRENCY="UNKNOWN_CURRENCY",E.USD="USD"}(u||(u={})),function(E){E.AOL_MAIL="AOL_MAIL",E.ASANA="ASANA",E.FACEBOOK="FACEBOOK",E.FLIPBOARD="FLIPBOARD",E.GMAIL="GMAIL",E.GPLUS="GPLUS",E.HACKER_NEWS="HACKER_NEWS",E.INSTAGRAM="INSTAGRAM",E.LINKEDIN="LINKEDIN",E.LIVE_MAIL="LIVE_MAIL",E.POCKET="POCKET",E.REDDIT="REDDIT",E.TWITTER="TWITTER",E.YAHOO="YAHOO",E.YAHOO_MAIL="YAHOO_MAIL"}(C||(C={})),function(E){E.NO_CARD_TYPE="NO_CARD_TYPE",E.SHORT_STORY_CARD="SHORT_STORY_CARD",E.STANDARD_CARD="STANDARD_CARD"}(P||(P={})),function(E){E.AMPLIFIED_NEW_STORY="AMPLIFIED_NEW_STORY",E.BOOKMARKED="BOOKMARKED",E.CF_POST_SIMILAR_TO_POST="CF_POST_SIMILAR_TO_POST",E.COLLABORATIVE_FILTERING="COLLABORATIVE_FILTERING",E.CURATED_IN_POPCHUNK="CURATED_IN_POPCHUNK",E.CURATED_IN_POPULAR_TOPIC="CURATED_IN_POPULAR_TOPIC",E.CURATED_IN_PRMT_CATALOG="CURATED_IN_PRMT_CATALOG",E.CURATED_IN_SUGGESTED_TOPIC="CURATED_IN_SUGGESTED_TOPIC",E.CURATED_IN_TOPIC="CURATED_IN_TOPIC",E.CURATED_NOTEWORTHY_WRITER="CURATED_NOTEWORTHY_WRITER",E.CURATED_POSTS_SHARING_TAGS_DEPRECATED="CURATED_POSTS_SHARING_TAGS_DEPRECATED",E.EVERGREEN="EVERGREEN",E.EXPLORE_POST_UNDER_PRESENTED="EXPLORE_POST_UNDER_PRESENTED",E.FEATURED_IN_TOPIC="FEATURED_IN_TOPIC",E.GENERIC_SQL_POST_LIST="GENERIC_SQL_POST_LIST",E.HOMEPAGE_FEATURED="HOMEPAGE_FEATURED",E.LATEST_IN_PREMIUM_TOPIC="LATEST_IN_PREMIUM_TOPIC",E.PERSONALIZED_IN_PREMIUM_TOPIC="PERSONALIZED_IN_PREMIUM_TOPIC",E.POSTS_SHARING_AUTHOR="POSTS_SHARING_AUTHOR",E.POSTS_SHARING_COLLECTION_AND_TAGS="POSTS_SHARING_COLLECTION_AND_TAGS",E.POSTS_SHARING_TAGS="POSTS_SHARING_TAGS",E.POST_FEED_REASON_UNKNOWN="POST_FEED_REASON_UNKNOWN",E.PROMOTED_POSTS="PROMOTED_POSTS",E.PUBLISHED_BY_AUTHOR="PUBLISHED_BY_AUTHOR",E.PUBLISHED_BY_COLLECTION="PUBLISHED_BY_COLLECTION",E.PUBLISHED_BY_CURRENT_USER="PUBLISHED_BY_CURRENT_USER",E.PUBLISHED_BY_USER="PUBLISHED_BY_USER",E.PUBLISHED_IN_COLLECTION="PUBLISHED_IN_COLLECTION",E.PUBLISHED_IN_TAG="PUBLISHED_IN_TAG",E.RECOMMENDED_BY_AUTHOR="RECOMMENDED_BY_AUTHOR",E.RECOMMENDED_BY_CURRENT_USER="RECOMMENDED_BY_CURRENT_USER",E.RECOMMENDED_BY_EDITOR="RECOMMENDED_BY_EDITOR",E.RECOMMENDED_BY_STAFF="RECOMMENDED_BY_STAFF",E.RECOMMENDED_BY_USER="RECOMMENDED_BY_USER",E.RECOMMENDED_IN_TAG="RECOMMENDED_IN_TAG",E.RECOMMENDED_MEMBER_ONLY_CONTENT="RECOMMENDED_MEMBER_ONLY_CONTENT",E.RESPONSES_MOST_RECOMMENDED="RESPONSES_MOST_RECOMMENDED",E.SIMILAR_TO_RECENTLY_READ_OR_VOTED="SIMILAR_TO_RECENTLY_READ_OR_VOTED",E.SIMILAR_TO_RECENTLY_VOTED_POSTS="SIMILAR_TO_RECENTLY_VOTED_POSTS",E.TAG_IN_INTEREST_GRAPH="TAG_IN_INTEREST_GRAPH",E.TOP_CONVERSATION_STARTER="TOP_CONVERSATION_STARTER",E.TOP_FOR_THE_DAY="TOP_FOR_THE_DAY",E.TOP_FOR_THE_DAY_GLOBALLY="TOP_FOR_THE_DAY_GLOBALLY",E.TOP_IN_COLLECTION="TOP_IN_COLLECTION",E.TOP_IN_TOPIC="TOP_IN_TOPIC",E.TOP_LONG_READ="TOP_LONG_READ",E.TOP_MEDIUM_READ="TOP_MEDIUM_READ",E.TOP_MOMENTUM="TOP_MOMENTUM",E.TOP_NEW_AUTHOR="TOP_NEW_AUTHOR",E.TOP_NEW_PUBLISHED="TOP_NEW_PUBLISHED",E.TOP_POSTS_SHARING_TAGS="TOP_POSTS_SHARING_TAGS",E.TOP_PUBLISHED_BY_COLLECTION="TOP_PUBLISHED_BY_COLLECTION",E.TOP_PUBLISHED_BY_USER="TOP_PUBLISHED_BY_USER",E.TOP_RECOMMENDED_BY_USER="TOP_RECOMMENDED_BY_USER",E.TOP_RECOMMENDED_IN_TAG="TOP_RECOMMENDED_IN_TAG",E.TOP_REFERRED="TOP_REFERRED",E.TOP_RESPONSE="TOP_RESPONSE",E.TOP_SHORT_READ="TOP_SHORT_READ",E.TOP_SIMILAR_TO_POST="TOP_SIMILAR_TO_POST",E.TOP_STORY_ON_MEDIUM="TOP_STORY_ON_MEDIUM",E.TOP_TRENDING="TOP_TRENDING",E.USER_IN_DEEP_SOCIAL_GRAPH="USER_IN_DEEP_SOCIAL_GRAPH",E.USER_PROFILE_FEATURED="USER_PROFILE_FEATURED",E.USER_PROFILE_HAS_RECOMMENDED="USER_PROFILE_HAS_RECOMMENDED",E.USER_PROFILE_MOST_RECOMMENDED="USER_PROFILE_MOST_RECOMMENDED",E.USER_PROFILE_NOT_A_COMMENT="USER_PROFILE_NOT_A_COMMENT",E.USER_PROFILE_ROOT_POSTS="USER_PROFILE_ROOT_POSTS"}(A||(A={})),function(E){E.ALL_RIGHTS_RESERVED="ALL_RIGHTS_RESERVED",E.CC_40_BY="CC_40_BY",E.CC_40_BY_NC="CC_40_BY_NC",E.CC_40_BY_NC_ND="CC_40_BY_NC_ND",E.CC_40_BY_NC_SA="CC_40_BY_NC_SA",E.CC_40_BY_ND="CC_40_BY_ND",E.CC_40_BY_SA="CC_40_BY_SA",E.CC_40_ZERO="CC_40_ZERO",E.PUBLIC_DOMAIN="PUBLIC_DOMAIN"}(o||(o={})),function(E){E.POST_TYPE_DRAFT="POST_TYPE_DRAFT",E.POST_TYPE_PUBLIC="POST_TYPE_PUBLIC",E.POST_TYPE_UNKNOWN="POST_TYPE_UNKNOWN",E.POST_TYPE_UNLISTED="POST_TYPE_UNLISTED"}(D||(D={})),function(E){E.LOCKED="LOCKED",E.PUBLIC="PUBLIC",E.UNLISTED="UNLISTED"}(s||(s={})),function(E){E.READING_LIST_ARCHIVE="READING_LIST_ARCHIVE",E.READING_LIST_NONE="READING_LIST_NONE",E.READING_LIST_QUEUE="READING_LIST_QUEUE"}(L||(L={})),function(E){E.ACCELERATED_MOBILE_PAGES="ACCELERATED_MOBILE_PAGES",E.DIRECT="DIRECT",E.INSTANT_ARTICLES="INSTANT_ARTICLES",E.INTERNAL="INTERNAL",E.OTHER="OTHER",E.PLATFORM="PLATFORM",E.RSS="RSS",E.SEARCH="SEARCH",E.SITE="SITE"}(U||(U={})),function(E){E.ASPECT_RATIO="ASPECT_RATIO",E.ASPECT_RATIO_VIEWPORT="ASPECT_RATIO_VIEWPORT",E.CONTENT="CONTENT",E.COVER_FADE="COVER_FADE",E.FULL_BLEED="FULL_BLEED",E.FULL_SCREEN="FULL_SCREEN",E.NONE="NONE",E.SECTION_FILL_CROP="SECTION_FILL_CROP",E.SECTION_FILL_OVERFLOW_X="SECTION_FILL_OVERFLOW_X",E.UNUSED_LEFT="UNUSED_LEFT",E.UNUSED_RIGHT="UNUSED_RIGHT"}(f||(f={})),function(E){E.BOTTOM_CENTER="BOTTOM_CENTER",E.CAPTION_ONLY="CAPTION_ONLY",E.FLOW="FLOW",E.MIDDLE_CENTER="MIDDLE_CENTER",E.SERIES_COVER="SERIES_COVER",E.SERIES_COVER_TITLELESS="SERIES_COVER_TITLELESS",E.TOP_CENTER="TOP_CENTER"}(p||(p={})),function(E){E.NO_VIDEO="NO_VIDEO",E.SECTION_ASPECT_FIT_VIDEO="SECTION_ASPECT_FIT_VIDEO"}(M||(M={})),function(E){E.HIGHLIGHT="HIGHLIGHT",E.RESPONSE="RESPONSE"}(h||(h={})),function(E){E.TOPIC_VISIBILITY_PUBLIC="TOPIC_VISIBILITY_PUBLIC",E.TOPIC_VISIBILITY_SPECIAL="TOPIC_VISIBILITY_SPECIAL",E.TOPIC_VISIBILITY_STAFF="TOPIC_VISIBILITY_STAFF"}(d||(d={})),function(E){E.ARCHIVED="ARCHIVED",E.RECENT="RECENT",E.SAVED="SAVED"}(g||(g={}))},"./src/styles/post/spacing.ts":function(E,n,_){"use strict";_.d(n,"h",(function(){return I})),_.d(n,"a",(function(){return R})),_.d(n,"f",(function(){return S})),_.d(n,"c",(function(){return i})),_.d(n,"e",(function(){return N})),_.d(n,"d",(function(){return c})),_.d(n,"g",(function(){return u})),_.d(n,"l",(function(){return C})),_.d(n,"i",(function(){return P})),_.d(n,"k",(function(){return A})),_.d(n,"j",(function(){return o})),_.d(n,"b",(function(){return D})),_.d(n,"m",(function(){return s}));var e=_("./node_modules/@babel/runtime/helpers/slicedToArray.js"),r=_.n(e),t=_("./node_modules/@babel/runtime/helpers/defineProperty.js"),T=_.n(t),O=_("./src/framework/design-system/util/style/responsiveStyles.ts");function a(E,n){var _=Object.keys(E);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(E);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(E,n).enumerable}))),_.push.apply(_,e)}return _}var I=0,R=10,S={xs:24,sm:24,md:32,lg:32,xl:32},i=36,N={xs:40,sm:40,md:56,lg:56,xl:56},c={xs:48,sm:48,md:80,lg:80,xl:80},u=36,C=24,P=24,A=32,o=40,D=function(E){for(var n=1;n<arguments.length;n++){var _=null!=arguments[n]?arguments[n]:{};n%2?a(Object(_),!0).forEach((function(n){T()(E,n,_[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(_)):a(Object(_)).forEach((function(n){Object.defineProperty(E,n,Object.getOwnPropertyDescriptor(_,n))}))}return E}({},N,{lg:0,xl:0}),s=function(){var E=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){var _=Object(O.b)((function(E){var n=r()(E,1)[0];return"".concat(n,"px")}),E);return Object(O.a)(n,{marginTop:_})}}},"./src/util/richText.ts":function(E,n,_){"use strict";_.d(n,"a",(function(){return H})),_.d(n,"e",(function(){return B})),_.d(n,"b",(function(){return F})),_.d(n,"c",(function(){return Y})),_.d(n,"d",(function(){return W})),_.d(n,"f",(function(){return Q})),_.d(n,"j",(function(){return k})),_.d(n,"i",(function(){return X})),_.d(n,"g",(function(){return q})),_.d(n,"h",(function(){return Z}));var e=_("./node_modules/@babel/runtime/helpers/slicedToArray.js"),r=_.n(e),t=_("./node_modules/@babel/runtime/helpers/defineProperty.js"),T=_.n(t),O=_("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),a=_.n(O),I=_("./node_modules/graphql-tag/src/index.js"),R=_.n(I),S=_("./src/schema-types/globalTypes.ts"),i=_("./src/styles/post/spacing.ts");function N(){var E=a()(["\n  fragment normalizedBodyModel_privateNote on Note {\n    ...getParagraphPrivateNotes_privateNote\n  }\n  ","\n"]);return N=function(){return E},E}function c(){var E=a()(["\n  fragment normalizedBodyModel_highlight on Quote {\n    ...getParagraphHighlights_highlight\n  }\n  ","\n"]);return c=function(){return E},E}function u(){var E=a()(["\n  fragment normalizedBodyModel_richText on RichText {\n    paragraphs {\n      ...getParagraphHighlights_paragraph\n      ...getParagraphPrivateNotes_paragraph\n    }\n    sections {\n      startIndex\n      ...getSectionEndIndex_section\n    }\n    ...getParagraphStyles_richText\n    ...getParagraphSpaces_richText\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return u=function(){return E},E}function C(){var E=a()(["\n  fragment getParagraphPrivateNotes_privateNote on Note {\n    id\n    anchor\n    author {\n      id\n      name\n      username\n      imageId\n      mediumMemberAt\n    }\n    content\n    createdAt\n    postId\n    post {\n      id\n      creator {\n        id\n      }\n      collection {\n        id\n        viewerIsEditor\n      }\n    }\n    replies {\n      id\n      author {\n        id\n        name\n        username\n        imageId\n        mediumMemberAt\n      }\n      content\n      createdAt\n      noteId\n      postId\n    }\n    selectionStartOffset\n    selectionEndOffset\n  }\n"]);return C=function(){return E},E}function P(){var E=a()(["\n  fragment getParagraphPrivateNotes_paragraph on Paragraph {\n    name\n  }\n"]);return P=function(){return E},E}function A(){var E=a()(["\n  fragment getParagraphHighlights_highlight on Quote {\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n"]);return A=function(){return E},E}function o(){var E=a()(["\n  fragment getParagraphHighlights_paragraph on Paragraph {\n    name\n  }\n"]);return o=function(){return E},E}function D(){var E=a()(["\n  fragment getParagraphSpaces_richText on RichText {\n    paragraphs {\n      layout\n      metadata {\n        originalHeight\n        originalWidth\n      }\n      type\n      ...paragraphExtendsImageGrid_paragraph\n    }\n    ...getSeriesParagraphTopSpacings_richText\n    ...getPostParagraphTopSpacings_richText\n  }\n  ","\n  ","\n  ","\n"]);return D=function(){return E},E}function s(){var E=a()(["\n  fragment paragraphExtendsImageGrid_paragraph on Paragraph {\n    layout\n    type\n  }\n"]);return s=function(){return E},E}function L(){var E=a()(["\n  fragment getSeriesParagraphTopSpacings_richText on RichText {\n    paragraphs {\n      id\n    }\n    sections {\n      startIndex\n    }\n  }\n"]);return L=function(){return E},E}function U(){var E=a()(["\n  fragment getEmbedlyCardUrlParams_paragraph on Paragraph {\n    type\n    iframe {\n      mediaResource {\n        iframeSrc\n      }\n    }\n  }\n"]);return U=function(){return E},E}function f(){var E=a()(["\n  fragment getPostParagraphTopSpacings_richText on RichText {\n    paragraphs {\n      layout\n    }\n    sections {\n      startIndex\n    }\n  }\n"]);return f=function(){return E},E}function p(){var E=a()(["\n  fragment getParagraphStyles_richText on RichText {\n    paragraphs {\n      text\n      type\n    }\n    sections {\n      ...getSectionEndIndex_section\n    }\n  }\n  ","\n"]);return p=function(){return E},E}function M(E,n){var _=Object.keys(E);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(E);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(E,n).enumerable}))),_.push.apply(_,e)}return _}function h(){var E=a()(["\n  fragment getSectionEndIndex_section on Section {\n    startIndex\n  }\n"]);return h=function(){return E},E}var d,g=function(E,n,_){var e=E[n+1];return e&&null!=e.startIndex?e.startIndex:_},l=R()(h());!function(E){E.Title="Title",E.Subtitle="Subtitle",E.Kicker="Kicker",E.MIXTAPE_EMBED="MIXTAPE_EMBED"}(d||(d={}));var H=function(E){for(var n=1;n<arguments.length;n++){var _=null!=arguments[n]?arguments[n]:{};n%2?M(Object(_),!0).forEach((function(n){T()(E,n,_[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(_)):M(Object(_)).forEach((function(n){Object.defineProperty(E,n,Object.getOwnPropertyDescriptor(_,n))}))}return E}({},d,{},S.e),B=function(E){var n=E.paragraphs,_=E.sections;if(!_[0])return[];for(var e=g(_,0,n.length),r=n.map((function(E){return E.type||S.e.P})),t=!1,T=-1,O=0;O<e;O++){var a=n[O];if(t){"H4"===a.type&&(r[O]=H.Subtitle);break}if("H3"===a.type||"H2"===a.type)r[O]=H.Title,t=!0;else{if(-1!==T)break;if("H4"!==a.type){if("IMG"===a.type||"IFRAME"===a.type||"P"===a.type&&/^\s*$/.test(a.text||""))continue;break}T=O}}return t&&-1!==T&&(r[T]=H.Kicker),r},G=R()(p(),l),m=R()(f()),F=function(E){if(!E||!E.type||"IFRAME"!==E.type)return null;var n=E&&E.iframe&&E.iframe.mediaResource&&E.iframe.mediaResource.iframeSrc?E.iframe.mediaResource.iframeSrc:"";if(!(n.includes("https://cdn.embedly.com")&&n.includes("&schema=")&&n.includes("&key=")&&n.includes("&url=")))return null;var _={};decodeURIComponent(n).split("?")[1].split("&").forEach((function(E){var n=E.split("="),e=r()(n,2),t=e[0],T=e[1];_[t]=T}));var e=_.key,t=_.schema,T=_.url;return e&&t&&T?{key:e,schema:t,url:T}:null},Y=R()(U()),y=R()(L()),v=R()(s()),V=function(E,n,_){for(var e,r=E.paragraphs,t="SERIES"===_?function(E,n){var _=E.paragraphs,e=E.sections,r=i.f,t=i.e,T=i.d,O=-1;return _.map((function(E,_){var a=e[O+1];if(a&&a.startIndex===_)return O++,i.h;var I=n[_],R=n[_-1];switch(R){case"PQ":if("PQ"!==I)return T}switch(I){case"BQ":switch(R){case"BQ":return r;default:return t}case"OLI":switch(R){case"OLI":return r;default:return t}case"ULI":switch(R){case"ULI":return r;default:return t}case"PQ":switch(R){case"PQ":return t;default:return T}}return t}))}(E,n):function(E,n,_){var e=E.paragraphs,r=E.sections,t=k(_),T=t?i.l:i.f,O=t?i.i:i.c,a=t?i.k:i.e,I=t?i.j:i.d,R=-1;return e.map((function(E,_){var S=n[_],N=n[_-1],c=E.layout,u=e[_-1]&&e[_-1].layout,C=r[R+1];if(C&&C.startIndex===_){if(R++,("IMG"===S||"IFRAME"===S)&&!t){if("OUTSET_LEFT"===c)return i.b;if("INSET_LEFT"===c)return i.h;if(0===_)return"FULL_WIDTH"===c?i.h:i.f}return a}if("PQ"===N)return S===N?a:I;switch(S){case"Title":switch(N){case"Kicker":return O;default:return a}case"Subtitle":switch(N){case"Title":return T;default:return a}case"P":switch(N){case"H1":case"H2":case"H3":case"H4":return T;default:return a}case"H1":case"H2":case"H3":return I;case"OLI":switch(N){case"H1":case"H2":case"H3":case"H4":return T;case"OLI":return i.g;default:return a}case"ULI":switch(N){case"H1":case"H2":case"H3":case"H4":return T;case"ULI":return i.g;default:return a}case"IMG":case"IFRAME":switch(N){case"IMG":case"IFRAME":switch(u){case"OUTSET_LEFT":case"INSET_LEFT":return i.h;case"OUTSET_CENTER":switch(c){case"OUTSET_CENTER":case"OUTSET_ROW":return i.h;case"FULL_WIDTH":return I;default:return a}case"OUTSET_ROW_CONTINUE":switch(c){case"OUTSET_CENTER":case"OUTSET_ROW":return i.h;default:return a}case"INSET_CENTER":switch(c){case"INSET_LEFT":return i.h;case"OUTSET_LEFT":return i.a;case"FULL_WIDTH":return I;default:return a}case"FULL_WIDTH":return"FULL_WIDTH"===c?i.h:I;default:return a}default:return a}case"PRE":switch(N){case"PRE":return T;default:return a}case"PQ":switch(N){case"H1":case"H2":case"H3":case"H4":case"PQ":return a;default:return I}case"MIXTAPE_EMBED":return T}return a}))}(E,n,_),T=[],O=0;O<r.length;O++)if(r[O]){var a=r[O].layout,I=r[O].type;if("OUTSET_ROW"===a&&"IMG"===I){var R=r[O].metadata;if(!R||!R.originalHeight||!R.originalWidth)continue;for(var S=R.originalWidth/R.originalHeight,N=O+1;(e=r[N])&&"OUTSET_ROW_CONTINUE"===e.layout&&"IMG"===e.type;){var c=r[N].metadata;if(!c||!c.originalHeight||!c.originalWidth)break;S+=c.originalWidth/c.originalHeight,N++}for(;O<N;)T[O]=S,O++;O=N-1}}return r.map((function(E,e){var O={paragraphTopSpacing:t[e]},a=n[e],I=n[e-1],R=E.layout,S=r[e-1]?r[e-1].layout:null;switch(a){case"PRE":switch(I){case"PRE":break;default:O={sequenceTopSpacing:O.paragraphTopSpacing,paragraphTopSpacing:i.h}}}switch(R){case"OUTSET_ROW":switch(S){case"OUTSET_ROW_CONTINUE":case"OUTSET_CENTER":O={paragraphTopSpacing:i.h};break;default:O={paragraphTopSpacing:i.h,sequenceTopSpacing:O.paragraphTopSpacing}}break;case"OUTSET_ROW_CONTINUE":O={paragraphTopSpacing:k(_)?i.k:i.h}}return T[e]&&(O.sequenceAspectRatio=T[e]),O}))},b=R()(D(),v,y,m),W=function(E){switch(E){case"BQ":return"italic";default:return"normal"}},K=R()(o()),w=R()(A()),x=R()(P()),j=R()(C()),Q=function(E,n){var _=n.highlights,e=n.privateNotes,r=n.richTextStyle,t=n.shouldAddHrs,T=void 0===t||t;if(!E)return[];var O=E.paragraphs,a=E.sections,I=B(E),R=V(E,I,r),S=function(E,n){if(!n)return[];var _=new Map;return n.forEach((function(E){E.paragraphs.forEach((function(n){var e=_.get(n.name)||[];e.push(E),_.set(n.name,e)}))})),E.map((function(E){return _.get(E.name)||[]}))}(O,_),i=function(E,n){if(!n)return[];var _=new Map;return n.forEach((function(E){var n=E.anchor,e=_.get(n)||[];e.push(E),_.set(n,e)})),E.map((function(E){return _.get(E.name)||[]}))}(O,e),N=O.map((function(E,n){return{paragraph:E,richTextStyle:r,paragraphStyle:I[n],spaceTop:R[n].paragraphTopSpacing,sequenceSpaceTop:R[n].sequenceTopSpacing,sequenceAspectRatio:R[n].sequenceAspectRatio,highlights:S[n],privateNotes:i[n]}})),c=[];return a.forEach((function(E,n){var _=g(a,n,O.length);T&&0!==n&&c.push("HR"),c.push({section:E,paragraphViewModels:N.slice(E.startIndex,_)})})),c},k=function(E){return"STREAM"===E||"CARD"===E},X=R()(u(),K,x,l,G,b),q=R()(c(),w),Z=R()(N(),j)}}]);
//# sourceMappingURL=screen.collection.packageBuilder~screen.collection.styleEditor~screen.landingpages.pres45~screen.lan~dc41d166.98208092.chunk.js.map