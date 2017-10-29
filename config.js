
const PORT = process.env.PORT || 1111;
const DATABASE_URI =
    process.env.DATABASE_URL || 'mysql://testuser:testpass@localhost:3306/testdb'

exports = module.exports = {
    PORT,
    DATABASE_URI
}