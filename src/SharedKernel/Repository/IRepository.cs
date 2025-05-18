using SharedKernel.BaseEntity;
using System.Linq.Expressions;

namespace SharedKernel.Repository;

public interface IRepository<T> where T : IEntity
{
    IQueryable<T> Get(Expression<Func<T, bool>>? predicate = null, string[]? includes = null);
    IEnumerable<U> FindPartialBy<U>(Expression<Func<T, U>> columns, Expression<Func<T, bool>>? predicate = null);
    T Add(T entity);
    void Add(List<T> entityList);
    T Delete(T entity);
    void Delete(IEnumerable<T> entityList);
    void Edit(T entity);
    void Edit(List<T> entityList);
    void Save(bool useBulkSave = false);
    int Count();
    Task<int> CountAsync();
    Task<int> SaveAsync(bool useBulkSave = false);
    void Remove(T entity);
}
