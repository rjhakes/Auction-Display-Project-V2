using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Models;
using MediatR;
using DL;

namespace BL.Query
{
    public class List
    {
        public class Query : IRequest<List<Buyer>> {

        }

        public class Handler : IRequestHandler<Query, List<Buyer>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Buyer>> Handle(Query request, CancellationToken cancellationToken)
            {
                // return await _context.Buyers.ToListAsync();
                throw new System.NotImplementedException();
            }
        }
    }
}