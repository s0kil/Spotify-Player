import {derived, writable} from "svelte/store";

export const spotifyAccessToken = writable(localStorage.getItem("spotifyAccessToken") || "");
spotifyAccessToken.subscribe(token => localStorage.setItem("spotifyAccessToken", token));

export let tokenExists = derived(spotifyAccessToken, $spotifyAccessToken => !!$spotifyAccessToken.length);
