<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<style type="text/css">
					body {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
						color: #444;
					}
					#sitemap {
						max-width: 980px;
						margin: 0 auto;
					}
					#sitemap__table {
						width: 100%;
						border-collapse: collapse;
					}
					#sitemap__table tr td {
						padding: 10px;
						border-bottom: 1px solid #ddd;
					}
					#sitemap__table tr:first-child td {
						border-bottom: 3px solid #ddd;
						font-weight: bold;
					}
					.url {
						color: #0051C3;
					}
				</style>
			</head>
			<body>
				<div id="sitemap">
					<h1>XML Sitemap</h1>
					<table id="sitemap__table">
						<tr>
							<td>URL</td>
							<td>Priority</td>
							<td>Change Frequency</td>
							<td>Last Modified</td>
						</tr>
						<xsl:for-each select="sitemap:urlset/sitemap:url">
							<tr>
								<td>
									<a class="url" href="{sitemap:loc}">
										<xsl:value-of select="sitemap:loc"/>
									</a>
								</td>
								<td>
									<xsl:value-of select="sitemap:priority"/>
								</td>
								<td>
									<xsl:value-of select="sitemap:changefreq"/>
								</td>
								<td>
									<xsl:value-of select="sitemap:lastmod"/>
								</td>
							</tr>
						</xsl:for-each>
					</table>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
