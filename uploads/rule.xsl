<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 
<body> 
<h1 align="center">Site Map Details</h1> 
<table border="3" align="center" > 
<tr> 
	<th>URL_Location</th> 
	<th>Last Modify</th>
	<th>Change Frequency</th> 
	<th>Priority</th>  
</tr> 
	<xsl:for-each select="urlset/url"> 
<tr> 
	<td>
	<xsl:element name="a">
    <xsl:attribute name="href">
        <xsl:value-of select="loc"/>
    </xsl:attribute>
    <xsl:value-of select="loc"/>
</xsl:element>
</td>
	<td>2019-05-09</td> 
	<td><xsl:value-of select="changefreq"/></td> 
	<td><xsl:value-of select="priority"/></td> 
</tr> 
	</xsl:for-each> 
	</table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 
