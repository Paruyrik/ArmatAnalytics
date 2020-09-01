import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import OurWorkPagePreview from './preview-templates/OurWorkPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import JobsPagePreview from './preview-templates/JobsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('ourWork', OurWorkPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('jobs', JobsPagePreview)
