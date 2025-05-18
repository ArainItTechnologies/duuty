using Domain.Repository.Query;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace DataAccess.Repository.Query;

public class QueryRepository<T> : IQueryRepository<T> where T : class
{
    protected readonly ApplicationDbContext _context;

    public QueryRepository(ApplicationDbContext context) => _context = context;

    public async Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> predicate)
    {
        return await _context.Set<T>().Where(predicate).ToListAsync();
    }
}