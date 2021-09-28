import * as Tone from "tone"

export function play(frequency: number){

    const synth = new Tone.OmniOscillator().toDestination()
    synth.frequency.value = frequency
    synth.start().stop("+"+ 0.5)
}