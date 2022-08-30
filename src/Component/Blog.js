import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='text-center mt-6 mb-20 text-4xl'>{t("allBlog.blogTitle1")} <span className='text-purple-600 '>{t("allBlog.blogTitle2")}</span>
      </div>
      <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center lg:mx-24' >
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_01.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 ">
            <p className='text-lg'>{t("allBlog.blogMainTitle1")}</p>
            <h3 className="text-xl card-title hover:text-purple-600">{t("allBlog.blogMainDes1")}</h3>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_02.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 ">
            <p className='text-lg'>{t("allBlog.blogMainTitle2")}</p>
            <h3 className="text-xl card-title hover:text-purple-600">{t("allBlog.blogMainDes2")}</h3>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_03.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 ">
            <p className='text-lg'>{t("allBlog.blogMainTitle3")}</p>
            <h3 className="text-xl card-title hover:text-purple-600">{t("allBlog.blogMainDes3")}</h3>
          </div>
        </div>
      </div>
      <p className='text-right my-10 text-2xl '>
        <Link className='text-primary' to='/blogs'>{t("allBlog.blogSeeMore")}<BsArrowRightShort className='display: inline-block' /></Link></p>
    </div>
  )
}

export default Blog