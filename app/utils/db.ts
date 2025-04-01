import { cache } from 'react';

// Cache database queries
export const getCachedData = cache(async (key: string, fetchFn: () => Promise<any>) => {
  // In a real implementation, you would use Redis or similar
  // For now, we'll use React's cache
  return fetchFn();
});

// Optimize database queries with pagination
export const paginateQuery = async <T>(
  query: () => Promise<T[]>,
  page: number = 1,
  limit: number = 10
) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = await query();
  return {
    data: data.slice(start, end),
    total: data.length,
    page,
    totalPages: Math.ceil(data.length / limit),
  };
};

// Example usage:
// const getPosts = cache(async () => {
//   return await db.posts.findMany();
// }); 