import nextConnect from 'next-connect'

const withAuthentication = (req, res, next) => {
	if (!req.headers.authentication) {
		return res.status(401).json({ message: 'Auth error' })
	}
	return next()
}

const handler = nextConnect()
	.use(withAuthentication)
	.get((req, res) => res.json({ message: 'GET!' }))
	.post((req, res) => res.json({ message: 'POST!' }))

export default handler
