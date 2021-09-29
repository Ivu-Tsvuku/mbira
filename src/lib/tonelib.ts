import * as Tone from "tone"

export function play(frequency: number, synth: Tone.AMSynth){
    synth.frequency.value = frequency
    synth.volume.value = -14
    synth.triggerAttackRelease(frequency, "8n");

}