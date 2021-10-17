interface IOctave {
    notes: string[]
    colour: string
}


export const octaveNotation: IOctave[] = [
    { notes: ['T3', 'B3', 'R5'], colour: 'orange' },
    { notes: ['T4', 'B5', 'R7'], colour: 'green' },
    { notes: ['T5', 'B6', 'R8'], colour: 'blue' },
    { notes: ['B7', 'R3'], colour: 'brown' },
    { notes: ['T6', 'T1', 'B1', 'R2', 'R9'], colour: 'purple' },
    { notes: ['T2', 'B4', 'R6'], colour: 'yellow' },
    { notes: ['B2', 'R1', 'R4'], colour: 'red' },
]
function mapColourOctaves(octave: IOctave, allNotes:any) {
    const { notes, colour } = octave
    notes.forEach(note => {
        allNotes[note] = colour
    })
}

export function getAllOctaveColours(){
    const allNotes: any = {}
    octaveNotation.forEach( (octave: IOctave) => {
        mapColourOctaves( octave, allNotes)
    })
    return allNotes
}
