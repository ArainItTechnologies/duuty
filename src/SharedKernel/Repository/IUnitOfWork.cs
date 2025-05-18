namespace SharedKernel.Repository;
public interface IUnitOfWork
{
    int Commit(bool useBulkSave = false);
    Task<int> CommitAsync(bool useBulkSave = false);
    void SetTrackChanges(bool trackChanges);
}
