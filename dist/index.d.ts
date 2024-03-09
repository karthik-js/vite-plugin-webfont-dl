import { Plugin } from 'vite';
import { AxiosProxyConfig } from 'axios';

interface Options {
	/**
	 * Inject critical css between style tag.
	 * default: `true`
	 * */
	injectAsStyleTag?: boolean;

	/**
	 * Minify CSS code during build.
	 * default: value of `build.minify`
	 * */
	minifyCss?: boolean;

	/**
	 * Embed base64-encoded fonts into css.
	 * default: `false`
	 * */
	embedFonts?: boolean;

	/**
	 * Load stylesheet asynchronously (using `media="print"`).
	 * Works only with `injectAsStyleTag:false`).
	 * default: `true`
	 * */
	async?: boolean;

	/**
	 * Persistently store downloaded css and font files in local file cache.
	 * If set to `false` the existing cache will be deleted.
	 * default: `true`
	 * */
	cache?: boolean;

	/**
	 * You can set proxy for network requests (using axios).
	 * default: `false`
	 */
	proxy?: false | AxiosProxyConfig;
}

declare function viteWebfontDownload(_webfontUrls?: string | string[], _options?: Options): Plugin;

export { viteWebfontDownload as ViteWebfontDownload, viteWebfontDownload as default, viteWebfontDownload as viteWebfontDl, viteWebfontDownload, viteWebfontDownload as webfontDl, viteWebfontDownload as webfontDownload };
