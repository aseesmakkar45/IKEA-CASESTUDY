import { useRef, useEffect, useCallback, useState } from 'react';

/**
 * Audio manager for the IKEA case study.
 * - Track 1 (ambient): "The Mountain" — calm background loop, low volume
 * - Track 2 (energetic): "Motivation Sport Rock" — plays in Presentation Mode
 */
export function useAmbientAudio(muted, presentationMode = false) {
    const ambientRef = useRef(null);
    const energeticRef = useRef(null);
    const initRef = useRef(false);

    // Initialize audio elements once
    const init = useCallback(() => {
        if (initRef.current) return;
        initRef.current = true;

        // Calm ambient background
        const ambient = new Audio('/the_mountain-background-music-487009.mp3');
        ambient.loop = true;
        ambient.volume = 0.12; // Low volume — ambient, not distracting
        ambient.preload = 'auto';
        ambientRef.current = ambient;

        // Energetic presentation track
        const energetic = new Audio('/alexgrohl-motivation-sport-rock-trailer-478796.mp3');
        energetic.loop = true;
        energetic.volume = 0.18;
        energetic.preload = 'auto';
        energeticRef.current = energetic;
    }, []);

    // Handle mute/unmute
    useEffect(() => {
        if (muted) {
            // Mute everything
            if (ambientRef.current) {
                ambientRef.current.pause();
            }
            if (energeticRef.current) {
                energeticRef.current.pause();
            }
        } else {
            // First unmute — initialize
            init();

            if (presentationMode) {
                // Presentation mode: play energetic track, pause ambient
                if (ambientRef.current) ambientRef.current.pause();
                if (energeticRef.current) {
                    energeticRef.current.play().catch(() => { });
                }
            } else {
                // Normal mode: play calm ambient, pause energetic
                if (energeticRef.current) energeticRef.current.pause();
                if (ambientRef.current) {
                    ambientRef.current.play().catch(() => { });
                }
            }
        }
    }, [muted, presentationMode, init]);

    // Switch tracks when presentation mode toggles (only if not muted)
    useEffect(() => {
        if (muted || !initRef.current) return;

        if (presentationMode) {
            if (ambientRef.current) ambientRef.current.pause();
            if (energeticRef.current) energeticRef.current.play().catch(() => { });
        } else {
            if (energeticRef.current) energeticRef.current.pause();
            if (ambientRef.current) ambientRef.current.play().catch(() => { });
        }
    }, [presentationMode, muted]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (ambientRef.current) {
                ambientRef.current.pause();
                ambientRef.current = null;
            }
            if (energeticRef.current) {
                energeticRef.current.pause();
                energeticRef.current = null;
            }
        };
    }, []);
}
