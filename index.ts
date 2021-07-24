/**
 * The Stalin sort is inspired by the great Soviet leader who eliminated those who defied the order!
 * @param input The input array to be sorted.
 * @param reversed *(Optional)* Defaults to False; to determine if the sort should be reversed.
 * @returns The sorted array, excluding the rogue elements not in order!
 */
export async function sort(input: any[], reversed: boolean = false) {
    if (reversed) {
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i + 1] > input[i]) {
                input = await removeItem(input, i);
                i -= 1;
            }
            i += 1;
        }
    }
    else {
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i + 1] < input[i]) {
                input = await removeItem(input, i);
                i -= 1;
            }
            i += 1;
        }
    }
    return input;
}

async function removeItem(array: any[], itemIndex: number): Promise<any[]> {
    array.splice(itemIndex, 1);
    return array;
}