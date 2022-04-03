import nextConnect from 'next-connect'

const handler = nextConnect({
	onNoMatch: (req, res) => res.status(404).json({ message: 'Not found' }),
})
	.get((req, res) => res.status(200).json({ message: 'GET!' }))
	.post((req, res) => res.status(200).json({ message: 'POST!' }))
	.patch((req, res) => res.status(200).json({ message: 'PATCH!' }))
	.put((req, res) => res.status(200).json({ message: 'PUT!' }))
	.delete((req, res) => res.status(200).json({ message: 'DELETE!' }))

// function oldHandler(req, res) {
// 	const { method } = req
// 	if (method === 'GET') {
// 		res.status(200).json({ message: 'GET!' })
// 	}

// 	if (method === 'POST') {
// 		res.status(200).json({ message: 'POST!' })
// 	}

// 	if (method === 'PATCH') {
// 		res.status(200).json({ message: 'PATCH!' })
// 	}

// 	if (method === 'PUT') {
// 		res.status(200).json({ message: 'PUT!' })
// 	}

// 	if (method === 'DELETE') {
// 		res.status(200).json({ message: 'DELETE!' })
// 	}

// 	res.status(404).json({ message: 'Not found' })
// }

export default handler
