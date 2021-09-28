import * as Tone from "tone"

export function play(frequency: number){

    const synth = new Tone.AMSynth().toDestination()
    synth.frequency.value = frequency
    synth.volume.value = -24
    synth.triggerAttackRelease(frequency, "8n");

}