/**
 * External dependencies
 */
const config = require( 'config' );

/**
 * Module variables
 */
let editorPaths;

const sections = [
	{
		name: 'sites',
		paths: [ '/sites' ],
		module: 'my-sites',
		group: 'sites',
		secondary: true
	},
	{
		name: 'customize',
		paths: [ '/customize' ],
		module: 'my-sites/customize',
		group: 'sites',
		secondary: true
	},
	{
		name: 'paladin',
		paths: [ '/paladin' ],
		module: 'my-sites/paladin',
		group: 'sites',
		secondary: true
	},
	{
		name: 'me',
		paths: [ '/me' ],
		module: 'me',
		group: 'me',
		secondary: true
	},
	{
		name: 'account',
		paths: [ '/me/account' ],
		module: 'me/account',
		group: 'me',
		secondary: true
	},
	{
		name: 'security',
		paths: [ '/me/security' ],
		module: 'me/security',
		group: 'me',
		secondary: true
	},
	{
		name: 'purchases',
		paths: [ '/me/purchases', '/purchases', '/me/billing', '/payment-methods/add-credit-card' ],
		module: 'me/purchases',
		group: 'me',
		secondary: true
	},
	{
		name: 'notification-settings',
		paths: [ '/me/notifications' ],
		module: 'me/notification-settings',
		group: 'me',
		secondary: true
	},
	{
		name: 'media',
		paths: [ '/media' ],
		module: 'my-sites/media',
		group: 'sites',
		secondary: true
	},
	{
		name: 'menus',
		paths: [ '/menus' ],
		module: 'my-sites/menus',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'people',
		paths: [ '/people' ],
		module: 'my-sites/people',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'plugins',
		paths: [ '/plugins' ],
		module: 'my-sites/plugins',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'posts-pages',
		paths: [ '/pages' ],
		module: 'my-sites/pages',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'posts-pages',
		paths: [ '/posts' ],
		module: 'my-sites/posts',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'settings',
		paths: [ '/settings' ],
		module: 'my-sites/site-settings',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'settings-seo',
		paths: [ '/settings/seo' ],
		module: 'my-sites/site-settings/seo-settings',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'sharing',
		paths: [ '/sharing' ],
		module: 'my-sites/sharing',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'signup',
		paths: [ '/start', '/jetpack' ],
		module: 'signup',
		secondary: false,
		enableLoggedOut: true,
		isomorphic: true
	},
	{
		name: 'stats',
		paths: [ '/stats' ],
		module: 'my-sites/stats',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'theme',
		paths: [ '/theme' ],
		module: 'my-sites/theme',
		enableLoggedOut: true,
		secondary: false,
		group: 'sites',
		isomorphic: true,
		title: 'Themes'
	},
	{
		name: 'themes',
		paths: [ '/design' ],
		module: 'my-sites/themes',
		enableLoggedOut: config.isEnabled( 'manage/themes/logged-out' ),
		secondary: true,
		group: 'sites',
		isomorphic: true,
		title: 'Themes'
	},
	{
		name: 'upgrades',
		paths: [ '/domains', '/checkout' ],
		module: 'my-sites/upgrades',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'plans',
		paths: [ '/plans' ],
		module: 'my-sites/plans',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'accept-invite',
		paths: [ '/accept-invite' ],
		module: 'my-sites/invites',
		enableLoggedOut: true
	},
	{
		name: 'ads',
		paths: [ '/ads' ],
		module: 'my-sites/ads',
		secondary: true,
		group: 'sites'
	},
	{
		name: 'mailing-lists',
		paths: [ '/mailing-lists' ],
		module: 'mailing-lists',
		enableLoggedOut: true
	}
];

editorPaths = [ '/post', '/page' ];
if ( config.isEnabled( 'manage/custom-post-types' ) ) {
	editorPaths.push( '/edit' );
}

sections.push( {
	name: 'post-editor',
	paths: editorPaths,
	module: 'post-editor',
	group: 'editor',
	secondary: true
} );

if ( config.isEnabled( 'account-recovery' ) ) {
	sections.push( {
		name: 'account-recovery',
		paths: [ '/account-recovery' ],
		module: 'account-recovery',
		secondary: false,
		enableLoggedOut: true,
	} );
}

if ( config.isEnabled( 'manage/drafts' ) ) {
	sections.push( {
		name: 'posts-pages',
		paths: [ '/drafts' ],
		module: 'my-sites/drafts',
		secondary: true,
		group: 'sites'
	} );
}

if ( config.isEnabled( 'reader' ) ) {
	// this MUST be the first section for /read paths so subsequent sections under /read can override settings
	sections.push( {
		name: 'reader',
		paths: [ '/', '/read' ],
		module: 'reader',
		secondary: true,
		group: 'reader',
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/read/feeds/[^\\/]+/posts/[^\\/]+', '/read/blogs/[^\\/]+/posts/[^\\/]+' ],
		module: 'reader/full-post',
		secondary: false,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/recommendations/posts' ],
		module: 'reader/recommendations',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/recommendations' ],
		module: 'reader/recommendations',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/discover' ],
		module: 'reader/discover',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/following' ],
		module: 'reader/following',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/tags', '/tag' ],
		module: 'reader/tag-stream',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/activities' ],
		module: 'reader/liked-stream',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/read/search' ],
		module: 'reader/search',
		secondary: true,
		group: 'reader'
	} );

	sections.push( {
		name: 'reader',
		paths: [ '/read/list' ],
		module: 'reader/list',
		secondary: true,
		group: 'reader'
	} );
}

if ( config.isEnabled( 'vip' ) ) {
	sections.push( {
		name: 'vip',
		paths: [ '/vip', '/vip/deploys', '/vip/billing', '/vip/support', '/vip/backups', '/vip/logs' ],
		module: 'vip',
		secondary: true
	} );
}

if ( config.isEnabled( 'help' ) ) {
	sections.push( {
		name: 'help',
		paths: [ '/help' ],
		module: 'me/help',
		secondary: true,
		enableLoggedOut: true,
		group: 'me'
	} );
}

if ( config.isEnabled( 'oauth' ) ) {
	sections.push( {
		name: 'auth',
		paths: [ '/login', '/authorize', '/api/oauth/token' ],
		module: 'auth',
		secondary: false,
		enableLoggedOut: true
	} );
}

if ( config.isEnabled( 'manage/custom-post-types' ) ) {
	sections.push( {
		name: 'posts-custom',
		paths: [ '/types' ],
		module: 'my-sites/types',
		secondary: true,
		group: 'sites'
	} );
}

if ( config.isEnabled( 'happychat' ) ) {
	sections.push( {
		name: 'happychat',
		paths: [ '/me/chat' ],
		module: 'me/happychat',
		group: 'me',
		secondary: true
	} );
}

module.exports = sections;
