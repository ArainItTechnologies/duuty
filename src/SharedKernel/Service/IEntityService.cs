using SharedKernel.BaseEntity;
using System.Linq.Expressions;

namespace SharedKernel.Service;
public interface IEntityService<T> where T : IEntity
{
    void Create(T entity, bool save = true, bool useBulkSave = false);
    Task CreateAsync(T entity, bool save = true, bool useBulkSave = false);
    void Create(List<T> entities, bool save = true, bool useBulkSave = false);
    Task CreateAsync(List<T> entities, bool save = true, bool useBulkSave = false);
    void Delete(T entity, bool save = true, bool useBulkSave = false);
    Task DeleteAsync(T entity, bool save = true, bool useBulkSave = false);
    IQueryable<T> Get(Expression<Func<T, bool>>? predicate = null, string[]? includes = null);
    void Update(T entity, bool save = true, bool useBulkSave = false);
    Task UpdateAsync(T entity, bool save = true, bool useBulkSave = false);
    void UpdateNoTracking(T entity, bool save = true);
    int Count();
    Task<int> CountAsync();
    void Update(IEnumerable<T> entityList, bool save = true, bool useBulkSave = false);
    Task UpdateAsync(IEnumerable<T> entityList, bool save = true, bool useBulkSave = false);
    void Save(bool useBulkSave = false);
    Task SaveAsync(bool useBulkSave = false);
    void SaveNoTracking();
    Task SaveNoTrackingAsync();
}
