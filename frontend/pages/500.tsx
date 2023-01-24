import { GetStaticProps } from "next"
import { Trans, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

export default function Custom500() {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo title={t("server-error")} />
      <div className="max-w-11/12 my-0 mx-auto w-11/12 2xl:w-[1400px] 2xl:max-w-[1400px]">
        <h1>{t("whoops")}</h1>
        <p>{t("an-error-occurred-server")}</p>
        <p>
          <Trans i18nKey={"common:retry-or-go-home"}>
            You might want to retry or go back <a href=".">home</a>.
          </Trans>
        </p>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? defaultLocale, ["common"])),
    },
  }
}
