export const dbQueries = {
    getUserId: 'SELECT user_id from darius.users ORDER BY user_id desc limit 1',
    truncateUsers: 'TRUNCATE TABLE darius.users'
}