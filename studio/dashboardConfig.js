export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629cdaffc31fa25c9847f9e0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eghqy351',
                  apiId: 'c5f1984f-3d90-45aa-99ce-035a831f8882'
                },
                {
                  buildHookId: '629cdaff09b18d6691cf7866',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-knmrpgyz',
                  apiId: 'ecd7e77e-e502-42ad-90e0-b694d4edc1a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KonradPabian/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-knmrpgyz.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
