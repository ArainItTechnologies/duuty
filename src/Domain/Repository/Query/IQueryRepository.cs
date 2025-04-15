using System.Linq.Expressions;

namespace Domain.Repository.Query;

public interface IQueryRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> predicate);
}
