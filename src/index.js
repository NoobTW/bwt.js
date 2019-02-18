function bwt(text) {
	if (!text || text.trim() === '') return '';

	const origText = `$${text}`
	const copyText = `$${text}$${text}`;
	let possibilities = [];

	for (let i=0;i<origText.length;i++) {
		possibilities.push((copyText.slice(i, origText.length + i)));
	}

	possibilities = possibilities.sort();
	return possibilities.map(x => x.slice(-1)[0]).join('');
}

function iBwt(text) {
	if (!text || text.trim() === '') return '';

	let bwtArray = text.split('');

	let Occ = (qc) => {
		let count = 0;
		for (let i=0;i<bwtArray.length;i++) {
			if (bwtArray[i] < qc ) count++;
		}
		return count;
	}

	let Count = (idx, qc) => {
		let count = 0;
		for (let i=0;i<idx;i++) {
			if (bwtArray[i] === qc) count ++;
		}
		return count;
	}

	let j = 0;
	let t = '';
	let LOOP_PROTECTION = bwtArray.length + 1;
	while (bwtArray[j] !== '$' && LOOP_PROTECTION--) {
		t = bwtArray[j] + t;
		j = Occ(bwtArray[j]) + Count(j, bwtArray[j]);
	}

	return t;
}

export {
	bwt,
	iBwt,
}
